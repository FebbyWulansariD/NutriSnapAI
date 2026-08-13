import {
  createContext,
  ReactNode,
  useContext,
  useMemo,
  useState,
} from 'react';

type OnboardingData = {
  name: string;
  goals: string[];
  bestie: string | null;
};

type OnboardingContextType = {
  data: OnboardingData;
  setName: (name: string) => void;
  setGoals: (goals: string[]) => void;
  setBestie: (bestie: string) => void;
  resetOnboarding: () => void;
};

const initialData: OnboardingData = {
  name: '',
  goals: [],
  bestie: null,
};

const OnboardingContext = createContext<
  OnboardingContextType | undefined
>(undefined);

type OnboardingProviderProps = {
  children: ReactNode;
};

export function OnboardingProvider({
  children,
}: OnboardingProviderProps) {
  const [data, setData] = useState<OnboardingData>(initialData);

  const setName = (name: string) => {
    setData((currentData) => ({
      ...currentData,
      name,
    }));
  };

  const setGoals = (goals: string[]) => {
    setData((currentData) => ({
      ...currentData,
      goals,
    }));
  };

  const setBestie = (bestie: string) => {
    setData((currentData) => ({
      ...currentData,
      bestie,
    }));
  };

  const resetOnboarding = () => {
    setData(initialData);
  };

  const value = useMemo(
    () => ({
      data,
      setName,
      setGoals,
      setBestie,
      resetOnboarding,
    }),
    [data]
  );

  return (
    <OnboardingContext.Provider value={value}>
      {children}
    </OnboardingContext.Provider>
  );
}

export function useOnboarding() {
  const context = useContext(OnboardingContext);

  if (!context) {
    throw new Error(
      'useOnboarding must be used inside OnboardingProvider'
    );
  }

  return context;
}