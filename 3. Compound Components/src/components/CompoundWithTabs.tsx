import { Tabs, TabsContent, TabsList, TabsTrigger } from "./tabs/Tabs";

const CompoundWithTabs = () => {
  return (
    <Tabs defaultValue="home">
      <TabsList>
        <TabsTrigger value="home">Home</TabsTrigger>
        <TabsTrigger value="about">About</TabsTrigger>
        <TabsTrigger value="contact">Contact</TabsTrigger>
      </TabsList>
      <TabsContent value="home">This is Home</TabsContent>
      <TabsContent value="about">This is about</TabsContent>
      <TabsContent value="contact">This is Contact</TabsContent>
    </Tabs>
  );
};

export default CompoundWithTabs;
