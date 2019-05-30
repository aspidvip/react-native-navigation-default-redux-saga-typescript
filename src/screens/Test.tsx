import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    alignSelf: 'center',
  },
});

interface Props {
  name: string;
  gogo?: number;
}

interface State {
  enthusiasmLevel: number;
}

export class Test extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  static defaultProps = {
    gogo: 0,
  };

  state = {
    enthusiasmLevel: 12,
  };

  render() {
    const { name, gogo } = this.props;
    const { enthusiasmLevel } = this.state;
    return (
      <View style={styles.root}>
        <Text>
          {enthusiasmLevel} - {name} - {gogo}
        </Text>
      </View>
    );
  }
}
