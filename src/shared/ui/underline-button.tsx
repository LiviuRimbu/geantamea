import { Button } from "@/shared/ui/shadcn/button";

interface UnderlineButtonProps {
  buttonState: string;
  buttonKey: string;
  setButtonState: React.Dispatch<React.SetStateAction<string>>;
  children: React.ReactNode;
  className?: string;
}

export const UnderlineButton = ({
  setButtonState,
  buttonKey,
  buttonState,
  className = "",
  children,
}: UnderlineButtonProps) => {
  return (
    <Button
      variant="ghost"
      onClick={() => setButtonState(buttonKey)}
      className={`relative py-2 text-[28px] font-medium
             duration-300
            after:content-[''] after:absolute after:bottom-0 after:inset-x-0 after:mx-auto
            after:h-[1px] after:bg-black after:w-[80%]
            after:scale-x-0 after:origin-left after:transition-transform after:duration-500 after:ease-out
            ${buttonState === buttonKey ? "after:scale-x-100" : "after:scale-x-0"} ${className}`}
    >
      {children}
    </Button>
  );
};
