import { DialogContent } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function AddProductDialog() {
  return (
    <DialogContent>
      <form className="space-y-4">
        <div className="flex flex-col gap-2">
          <Label htmlFor="name" className="font-semibold">
            Nome
          </Label>
          <Input type="text" id="name" className="Input" />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="price" className="font-semibold">
            Preço
          </label>
          <Input type="number" id="price" className="Input" />
        </div>
      </form>
    </DialogContent>
  );
}
