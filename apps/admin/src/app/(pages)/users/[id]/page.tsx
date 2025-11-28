import CardList from "@/components/cardList";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Progress } from "@/components/ui/progress";
import { BadgeCheck, DollarSign, Shield, Trophy } from "lucide-react";

import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import EditUserform from "./form/editUserform";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import AppLineChart from "@/components/AppLineChart";

const SingleUserPage = () => {
  return (
    <div>
      {/* bread crumb / steps */}
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/users">Users</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>John Doe</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      {/* container */}
      <div className="mt-4 flex flex-col lg:flex-row gap-8">
        {/* left */}
        <div className="w-full lg:w-1/2 space-y-6">
          {/* user badges */}
          <div className="bg-primary-foreground p-4 rounded-lg border shadow-xs">
            <h1 className="text-md font-semibold">User Badges</h1>
            <div className="flex gap-4 mt-4">
              <HoverCard>
                <HoverCardTrigger>
                  <BadgeCheck
                    size={36}
                    className="rounded-full bg-blue-500/30 border border-blue-500/50 p-2"
                  />
                </HoverCardTrigger>
                <HoverCardContent>
                  <h1 className="font-bold mb-2">Verified User</h1>
                  <p className="text-sm text-muted-foreground">
                    This user has been verified by the admin.
                  </p>
                </HoverCardContent>
              </HoverCard>
              <HoverCard>
                <HoverCardTrigger>
                  <Shield
                    size={36}
                    className="rounded-full bg-green-800/30 border border-green-800/50 p-2"
                  />
                </HoverCardTrigger>
                <HoverCardContent>
                  <h1 className="font-bold mb-2">Admin</h1>
                  <p className="text-sm text-muted-foreground">
                    Admin users have access to all features and can manage
                    users.
                  </p>
                </HoverCardContent>
              </HoverCard>
              <HoverCard>
                <HoverCardTrigger>
                  <Trophy
                    size={36}
                    className="rounded-full bg-yellow-500/30 border border-yellow-500/50 p-2"
                  />
                </HoverCardTrigger>
                <HoverCardContent>
                  <h1 className="font-bold mb-2">Awarded</h1>
                  <p className="text-sm text-muted-foreground">
                    This user has been awarded for their contributions.
                  </p>
                </HoverCardContent>
              </HoverCard>
              <HoverCard>
                <HoverCardTrigger>
                  <DollarSign
                    size={36}
                    className="rounded-full bg-purple-500/30 border border-purple-500/50 p-2"
                  />
                </HoverCardTrigger>
                <HoverCardContent>
                  <h1 className="font-bold mb-2">Elite Buyer</h1>
                  <p className="text-sm text-muted-foreground">
                    This user has purchase products worth $1000 or more in past
                    1 year.
                  </p>
                </HoverCardContent>
              </HoverCard>
            </div>
          </div>

          {/* user card container */}
          <div className="bg-primary-foreground rounded-lg p-4 space-y-2 border shadow-xs">
            <div className="flex items-center gap-4">
              <Avatar className="size-12 ">
                <AvatarImage
                  className="rounded-full"
                  src="https://avatars.githubusercontent.com/u/1486366"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <h1 className="font-semibold">John Doe</h1>
            </div>
            <p className="text-sm text-muted-foreground">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A eaque
              quidem nam accusamus eveniet eos architecto in temporibus dolorem
              libero voluptatem, cumque laboriosam animi beatae, pariatur quo
              facere dignissimos nesciunt.
            </p>
          </div>

          {/* information */}
          <div className="bg-primary-foreground p-4 rounded-lg border shadow-xs">
            <div className="flex justify-between">
              <h1 className="font-semibold">User Information</h1>
              <EditUserform />
            </div>
            <div className="space-y-4 mt-4">
              <div className="flex flex-col gap-2 mb-8">
                <p className="text-sm text-muted-foreground">
                  Profile completion 33%
                </p>
                <Progress value={33} />
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="">Role:</span>
                <p className="rounded-full bg-primary/60 text-secondary  px-2 py-1 text-sm">
                  Admin
                </p>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="font-medium">Username:</span>
                <span>John Doe</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="font-medium">Email:</span>
                <span>johndoe@gamil.com</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="font-medium">phone:</span>
                <span>+91 9869834656</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="font-medium">Address:</span>
                <span>2041 Brokben heights 2nd cross street 52 avanue </span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="font-medium">City:</span>
                <span>Manhattan </span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="font-medium">State:</span>
                <span>NewYork</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="font-medium">Postal Code:</span>
                <span>900011 </span>
              </div>
              <p className="text-sm text-muted-foreground">Joined since 2021</p>
            </div>
          </div>
        </div>

        {/* right */}
        <div className="w-full lg:w-1/2 space-y-6">
          {/* cardlist */}

          <CardList title="Recent Orders" />

          {/* cart container */}
          <div className="bg-primary-foreground rounded-lg">
            <AppLineChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleUserPage;
