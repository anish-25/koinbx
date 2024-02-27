"use client";

import Typography from "@/components/typography";
import Container from "@/components/layout/container";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CurrencyList } from "@/components/tables/currency-list";
import { useEffect, useState } from "react";
import { ref, onValue, off } from "firebase/database";
import { database } from "@/lib/firebase-config";

export default function Home() {
  const [data, setData] = useState<{ listpairs: any[]; trendingpairs: any[] }>({
    listpairs: [],
    trendingpairs: [],
  });
  const [activeTab, setActiveTab] = useState("hot_list");
  useEffect(() => {
    const dataRef = ref(database, "currency_list");
    onValue(dataRef, (snapshot) => {
      if (snapshot.exists()) {
        setData(snapshot.val());
      } else {
        console.log("No data");
        setData({
          listpairs: [],
          trendingpairs: [],
        });
      }
    });
    return () => off(dataRef);
  }, []);
  return (
    <>
      <Container className="lg:!px-32 md:!px-24 px-10">
        <div className="min-h-[calc(100vh-80px)] flex flex-col justify-start space-y-10 py-10 items-start">
          <Typography
            variant={"h2"}
            className="font-semibold !text-[32px] text-secondary">
            Catch Your Next Trading Opportunity
          </Typography>
          <Tabs
            defaultValue="hot_list"
            onValueChange={setActiveTab}
            value={activeTab}
            className="w-full ">
            <TabsList className="px-10 !bg-[#f4f6f9] w-full flex justify-start space-x-8 items-center !py-0 h-auto">
              <TabsTrigger className="py-5" value="hot_list">
                HOT LIST
              </TabsTrigger>
              <TabsTrigger className="py-5" value="new_list">
                NEW LIST
              </TabsTrigger>
            </TabsList>
            <TabsContent
              value="hot_list"
              className="max-h-[410px] max-w-full overflow-auto">
              <CurrencyList data={data.trendingpairs} />
            </TabsContent>
            <TabsContent
              value="new_list"
              className="max-h-[410px] max-w-full overflow-auto">
              <CurrencyList data={data.listpairs} />
            </TabsContent>
          </Tabs>
        </div>
      </Container>
    </>
  );
}
