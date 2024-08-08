import { Button } from "@/components/ui/button";

const NavBar = () => {
  return (
    <div className="bg-gray-200 flex justify-end px-16 py-2 sticky dark:bg-slate-800 h-16 items-center">
      <div className="flex gap-2 items-start h-full">
        {/* <ModeToggle /> */}
        <Button className="h-full" variant="default">
          Log in
        </Button>
        <Button className="h-full" variant="default">
          Sign up
        </Button>
      </div>
    </div>
  );
};

export default NavBar;
