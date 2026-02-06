import { useFocusEffect } from '@react-navigation/native';
import { BackHandler } from 'react-native';
import { useCallback } from 'react';

/**
 * Custom hook that prevents the back button from working
 * Use this hook in any screen where you want to disable back navigation
 * Example: usePreventGoBack();
 */
export const usePreventGoBack = () => {
  useFocusEffect(
    useCallback(() => {
      const onBackPress = () => {
        // Return true to prevent default back behavior
        return true;
      };

      const subscription = BackHandler.addEventListener('hardwareBackPress', onBackPress);

      return () => subscription.remove();
    }, [])
  );
};
