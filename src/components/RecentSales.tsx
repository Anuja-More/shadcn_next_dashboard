import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export type SalesProps = {
  name : string;
  email : string;
  amount : string;
}
export default function RecentSales(props : SalesProps) {
  return (
    // <div className="space-y-8">
    //   <div className="flex flex-wrap items-center">
    //     <Avatar className="h-9 w-9">
    //       <AvatarImage src="/avatars/01.png" alt="Avatar" />
    //       <AvatarFallback>OM</AvatarFallback>
    //     </Avatar>
    //     <div className="ml-4 space-y-1">
    //       <p className="text-sm font-medium leading-none">Olivia Martin</p>
    //       <p className="text-sm text-muted-foreground">
    //         olivia.martin@email.com
    //       </p>
    //     </div>
    //     <div className="ml-auto font-medium">+$1,999.00</div>
    //   </div>
    //   <div className="flex flex-wrap items-center">
    //     <Avatar className="flex h-9 w-9 items-center justify-center space-y-0 border">
    //       <AvatarImage src="/avatars/02.png" alt="Avatar" />
    //       <AvatarFallback>JL</AvatarFallback>
    //     </Avatar>
    //     <div className="ml-4 space-y-1">
    //       <p className="text-sm font-medium leading-none">Jackson Lee</p>
    //       <p className="text-sm text-muted-foreground">jackson.lee@email.com</p>
    //     </div>
    //     <div className="ml-auto font-medium">+$39.00</div>
    //   </div>
    //   <div className="flex flex-wrap items-center">
    //     <Avatar className="h-9 w-9">
    //       <AvatarImage src="/avatars/03.png" alt="Avatar" />
    //       <AvatarFallback>IN</AvatarFallback>
    //     </Avatar>
    //     <div className="ml-4 space-y-1">
    //       <p className="text-sm font-medium leading-none">Isabella Nguyen</p>
    //       <p className="text-sm text-muted-foreground">
    //         isabella.nguyen@email.com
    //       </p>
    //     </div>
    //     <div className="ml-auto font-medium">+$299.00</div>
    //   </div>
    //   <div className="flex flex-wrap items-center">
    //     <Avatar className="h-9 w-9">
    //       <AvatarImage src="/avatars/04.png" alt="Avatar" />
    //       <AvatarFallback>WK</AvatarFallback>
    //     </Avatar>
    //     <div className="ml-4 space-y-1">
    //       <p className="text-sm font-medium leading-none">William Kim</p>
    //       <p className="text-sm text-muted-foreground">will@email.com</p>
    //     </div>
    //     <div className="ml-auto font-medium">+$99.00</div>
    //   </div>
    //   <div className="flex flex-wrap items-center">
    //     <Avatar className="h-9 w-9">
    //       <AvatarImage src="/avatars/05.png" alt="Avatar" />
    //       <AvatarFallback>SD</AvatarFallback>
    //     </Avatar>
    //     <div className="ml-4 space-y-1">
    //       <p className="text-sm font-medium leading-none">Sofia Davis</p>
    //       <p className="text-sm text-muted-foreground">sofia.davis@email.com</p>
    //     </div>
    //     <div className="ml-auto font-medium">+$39.00</div>
    //   </div>
    // </div>
    <div className="flex flex-wrap justify-between gap-3">
      <section className="flex flex-wrap justify-between">
        <div className="p-1">
         <Avatar className="h-9 w-9">
           <AvatarImage src={`https://api.dicebear.com/7.x/adventurer/svg?seed=${props.name}`} alt="Avatar" />
           <AvatarFallback>{props.name}</AvatarFallback>
         </Avatar>
        </div>
        <div className="text-sm">
          <p>{props.name}</p>
          <div className="text-ellipsis overflow-hidden whitespace-nowrap w-[120px] sm:w-auto text-gray-400">
            {props.email}
            </div>
        </div>
      </section>
        <p>{props.amount}</p>
    </div>
  );
}
