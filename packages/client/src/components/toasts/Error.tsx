import * as Toast from "@radix-ui/react-toast";

interface Props {
  open: boolean;
  setOpen: (open: boolean) => void;
  errorMessage: string;
}

function Error({ open, setOpen, errorMessage }: Props) {
  return (
    <Toast.Root
      className="bg-red-500 rounded-md shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] p-[15px] grid [grid-template-areas:_'title_action'_'description_action'] grid-cols-[auto_max-content] gap-x-[15px] items-center data-[state=open]:animate-slideIn data-[state=closed]:animate-hide data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=cancel]:translate-x-0 data-[swipe=cancel]:transition-[transform_200ms_ease-out] data-[swipe=end]:animate-swipeOut"
      open={open}
      onOpenChange={setOpen}
    >
      <Toast.Title className="[grid-area:_title] mb-[5px] font-semibold  text-white text-base">
        Error
      </Toast.Title>
      <Toast.Description asChild>
        <p className="text-white font-normal">{errorMessage}</p>
      </Toast.Description>
      <Toast.Action
        className="[grid-area:_action]"
        asChild
        altText="Goto schedule to undo"
      >
        <button className="inline-flex text-white items-center justify-center rounded font-medium text-xs px-[10px] leading-[25px] h-[25px] bg-green2 text-green11 shadow-[inset_0_0_0_1px] shadow-green7 hover:shadow-[inset_0_0_0_1px] hover:shadow-green8 focus:shadow-[0_0_0_2px] focus:shadow-green8">
          Close
        </button>
      </Toast.Action>
    </Toast.Root>
  );
}

export default Error;
