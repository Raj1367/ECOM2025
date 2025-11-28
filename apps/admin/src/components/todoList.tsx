"use client";
import React, { useState } from "react";
import { ScrollArea } from "./ui/scroll-area";
import { Card } from "./ui/card";
import { Checkbox } from "./ui/checkbox";
import { Label } from "./ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "./ui/button";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { Calendar } from "./ui/calendar";
const todoListData = [
  {
    id: "item1",
    content: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. ",
  },
  {
    id: "item2",
    content: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. ",
  },
  {
    id: "item3",
    content: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. ",
  },
  {
    id: "item4",
    content: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. ",
  },
  {
    id: "item5",
    content: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. ",
  },

  {
    id: "item6",
    content: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. ",
  },
  {
    id: "item7",
    content: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. ",
  },
  {
    id: "item8",
    content: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. ",
  },
  {
    id: "item9",
    content: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. ",
  },
  {
    id: "item10",
    content: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. ",
  },
  {
    id: "item11",
    content: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. ",
  },
  {
    id: "item12",
    content: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. ",
  },
];

const TodoList = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const [open, setOpen] = useState(false);

  return (
    <div>
      <h1 className="text-md font-medium mb-3">TodoList</h1>

      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button className="w-full cursor-pointer">
            <CalendarIcon />
            {date ? format(date, "PPP") : <span></span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="p-0 w-auto">
          <Calendar
            mode="single"
            selected={date}
            onSelect={() => {
              setDate(date)
              setOpen(false)
            }}
            className="rounded-md border shadow-sm"
            captionLayout="dropdown"
          />
        </PopoverContent>
      </Popover>

      <ScrollArea className="h-[400px] mt-4 overflow-y-auto px-4">
        {/* list item */}
        <div className="flex flex-col gap-2">
          {todoListData.map((item, index) => (
            <Card className="p-4 bg-secondary" key={index}>
              <div className="flex items-center gap-4">
                <Checkbox id={item.id} className="cursor-pointer" />
                <Label
                  htmlFor={item.id}
                  className="text-sm text-muted-foreground"
                >
                  {item.content}
                </Label>
              </div>
            </Card>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default TodoList;
