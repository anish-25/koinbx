import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import Image from "next/image";

export function CurrencyList({ data }: { data: any[] }) {
  return (
    <Table>
      <TableHeader>
        <TableRow className="border-b-transparent w-1/5">
          <TableHead className="w-1/5">Trading Pairs</TableHead>
          <TableHead className="w-1/5">Last Price</TableHead>
          <TableHead className="w-1/5">24 hrs change</TableHead>
          <TableHead className="text-left w-1/5 sm:visible invisible">
            Per/Day Chart
          </TableHead>
          <TableHead className="text-center w-1/5 sm:visible invisible">
            Trade
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((curr) => {
          let change = isNaN(Number(curr.change))
            ? 0
            : Number(curr.change).toFixed(2);
          let symbol = new Intl.NumberFormat("en-US", {
            currency: curr?.seccurr?.substring(0, 3),
            style: "currency",
            maximumFractionDigits: 30,
          });
          return (
            <TableRow className="border-b-transparent" key={curr.pair_name}>
              <TableCell className="font-medium flex justify-start items-center space-x-2">
                <span className="min-w-[30px]">
                  <Image
                    src={curr.imgurl}
                    width={30}
                    height={30}
                    className="rounded-full"
                    alt={curr.pair_name}
                  />
                </span>
                <span>{curr.pair_name}</span>
              </TableCell>
              <TableCell className="font-medium">
                {symbol.format(curr.price)}
              </TableCell>
              <TableCell
                className={cn(
                  "font-medium",
                  "text-primary",
                  Number(change) < 0 && "text-red-500"
                )}>
                {change} %
              </TableCell>
              <TableCell className="text-right justify-start items-center sm:visible invisible">
                <Image
                  src={
                    Number(change) < 0
                      ? "https://koinbx.com/assets/img/NewUI/DownGraph.svg"
                      : "https://koinbx.com/assets/img/NewUI/UpGraph.svg"
                  }
                  width={80}
                  height={50}
                  priority={true}
                  alt="graph"
                />
              </TableCell>
              <TableCell className="text-center sm:visible invisible">
                <button className="bg-transparent rounded-full py-1 px-4 border border-primary">
                  Trade
                </button>
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}
