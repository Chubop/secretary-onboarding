"use client";

import AudioFirst from "@/components/audio-first";
import PromptsAndActions from "@/components/prompts-and-actions";
import SecretaryKeepsSecrets from "@/components/secretary-keeps-secrets";
import Splash from "@/components/splash";
import Streams from "@/components/streams";
import OnboardingButton from "@/components/ui/onboarding-button";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Home() {
  const stepComponents: { [key: number]: any } = {
    1: Splash,
    2: PromptsAndActions,
    3: Streams,
    4: AudioFirst,
    5: SecretaryKeepsSecrets,
  };

  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = Object.keys(stepComponents).length;

  const CurrentComponent = stepComponents[currentStep];

  const goToNextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  // Animation variants
  const containerVariants = {
    initial: { scale: 0.95, opacity: 0 },
    animate: { scale: 1, opacity: 1, transition: { duration: 0.25 } },
    exit: { scale: 0.95, opacity: 0, transition: { duration: 0.25 } },
  };

  const getOnboardingButtonText = () => {
    if (currentStep === 1) {
      // say "Begin" on the first step
      return "Begin";
    }
    if (currentStep > 1 && currentStep < totalSteps) {
      // say "Got it" on the other steps
      return "Got it";
    } else {
      // say "Let's start" on the last step
      return "Let's start";
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center space-y-6 fade-in">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          variants={containerVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="flex flex-col items-center space-y-6"
        >
          <CurrentComponent />
          <OnboardingButton onClick={goToNextStep}>
            {getOnboardingButtonText()}
          </OnboardingButton>
        </motion.div>
      </AnimatePresence>
    </main>
  );
}
