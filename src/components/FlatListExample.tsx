import React, {useEffect, useState} from 'react';
import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';

type ItemProps = {
  item: {
    title: string;
    id: number;
  };
};
type ItemData = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};
const RenderItem = ({item}: ItemProps) => {
  return <Text style={styles.item}>{item.title}</Text>;
};
const ItemSeparator: React.FC = () => {
  return <View style={styles.seperator} />;
};
const EmptyComponent: React.FC = () => {
  return <Text>NO DATA FOUND</Text>;
};

const FlatListHeader: React.FC = () => {
  return <Text style={styles.header_footer}>FLATLIST HEADER</Text>;
};
const FlatListFooter: React.FC = () => {
  return <Text style={styles.header_footer}>FLATLIST FOOTER</Text>;
};

const FlatListExample: React.FC = () => {
  const [data, setData] = useState<ItemData[]>([]);
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const Fetchdata = async () => {
    setRefreshing(true);
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/todos',
      );
      const json = await response.json();
      setData(json);
      setRefreshing(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setRefreshing(false);
    }
  };
  useEffect(() => {
    Fetchdata();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={RenderItem}
        keyExtractor={item => item.id.toString()}
        ItemSeparatorComponent={ItemSeparator}
        ListEmptyComponent={EmptyComponent}
        ListHeaderComponent={FlatListHeader}
        ListFooterComponent={FlatListFooter}
        onRefresh={Fetchdata}
        refreshing={refreshing}
        progressViewOffset={350}
        removeClippedSubviews
      />
    </SafeAreaView>
  );
};

export default FlatListExample;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  item: {
    fontSize: 16,
    marginVertical: 8,
  },
  seperator: {
    height: 1,
    backgroundColor: 'gray',
    width: '98%',
  },
  header_footer: {
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: 'gray',
    padding: 5,
    textAlign: 'center',
  },
});
