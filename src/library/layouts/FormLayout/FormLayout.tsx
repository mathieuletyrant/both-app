import React, { FC, ReactNode } from 'react'
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Platform,
} from 'react-native'

import { colors } from 'res/colors'
import { MinimalButton } from 'library/components/MinimalButton'
import { Button } from 'library/components/Button'
import { IconButton } from 'library/components/IconButton'

interface FormLayoutProps {
  containerStyle: any
  label: ReactNode
  bottomInfo?: ReactNode
  onBackAction?: VoidFunction
  onCloseAction?: VoidFunction
  onNextAction?: VoidFunction
  onFinishAction?: VoidFunction
}

export const FormLayout: FC<FormLayoutProps> = ({
  containerStyle,
  label,
  bottomInfo,
  onBackAction,
  onCloseAction,
  onFinishAction,
  onNextAction,
  children,
}) => (
  <KeyboardAvoidingView
    style={styles.container}
    behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
  >
    <TouchableWithoutFeedback>
      <>
        {onBackAction && (
          <MinimalButton
            iconName="chevron_left"
            onAction={onBackAction}
            iconColor="blueDark"
          />
        )}

        {onCloseAction && (
          <MinimalButton
            iconName="close"
            onAction={onCloseAction}
            iconColor="blueDark"
          />
        )}

        <View style={containerStyle}>
          {label}
          {children}

          {(onNextAction || onFinishAction || bottomInfo) && (
            <View style={styles.bottomContainer}>
              {bottomInfo}
              <View style={styles.buttonContainer}>
                {onNextAction && (
                  <IconButton
                    iconName="arrow_right"
                    onAction={onNextAction}
                    size={64}
                    buttonColor="blueDark"
                    iconColor="white"
                  />
                )}

                {onFinishAction && (
                  <IconButton
                    iconName="check"
                    onAction={onFinishAction}
                    size={64}
                    buttonColor="blueDark"
                    iconColor="white"
                  />
                )}
              </View>
            </View>
          )}
        </View>
      </>
    </TouchableWithoutFeedback>
  </KeyboardAvoidingView>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 80,
    paddingLeft: 24,
    paddingRight: 24,
    backgroundColor: colors.beigeLight,
  },
  buttonContainer: {
    alignItems: 'center',
    marginTop: 16,
  },
  bottomContainer: {
    marginBottom: 32,
  },
})
