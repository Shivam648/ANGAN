import { useUI } from "../../context/UIContext";
import { measurementGuide, sizeRows } from "../../data/sizing";
import { Dialog } from "../ui/Dialog";

export function SizeGuideDialog() {
  const { sizeGuideOpen, closeSizeGuide } = useUI();

  return (
    <Dialog
      open={sizeGuideOpen}
      onClose={closeSizeGuide}
      title="Size guide"
      variant="modal"
      className="max-w-2xl"
    >
      <div className="px-6 py-10 sm:px-10">
        <p className="eyebrow-sm text-espresso/50">Fit & sizing</p>
        <h2 className="display-sm mt-2">Size guide</h2>
        <p className="mt-3 max-w-lg text-sm leading-relaxed text-espresso/65">
          Measurements are garment measurements in centimetres. Our knits are
          designed with a little room for layering. If you are between sizes,
          choose the larger size for a relaxed line.
        </p>

        <div className="mt-7 overflow-x-auto">
          <table className="w-full min-w-[420px] border-collapse text-left text-sm">
            <caption className="sr-only">
              Garment measurements in centimetres
            </caption>
            <thead>
              <tr className="border-y border-line text-[0.5625rem] uppercase tracking-[0.16em] text-espresso/50">
                <th scope="col" className="py-3 pr-4 font-medium">
                  Size
                </th>
                <th scope="col" className="py-3 pr-4 font-medium">
                  Chest
                </th>
                <th scope="col" className="py-3 pr-4 font-medium">
                  Length
                </th>
                <th scope="col" className="py-3 font-medium">
                  Sleeve
                </th>
              </tr>
            </thead>
            <tbody>
              {sizeRows.map((row) => (
                <tr key={row.size} className="border-b border-line-soft">
                  <th
                    scope="row"
                    className="py-3 pr-4 font-sans text-xs font-medium tracking-[0.1em]"
                  >
                    {row.size}
                  </th>
                  <td className="py-3 pr-4 tabular-nums text-espresso/75">
                    {row.chest}
                  </td>
                  <td className="py-3 pr-4 tabular-nums text-espresso/75">
                    {row.length}
                  </td>
                  <td className="py-3 tabular-nums text-espresso/75">
                    {row.sleeve}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-7 grid gap-5 border-t border-line pt-6 sm:grid-cols-3">
          {measurementGuide.map((item) => (
            <div key={item.title}>
              <h3 className="text-[0.625rem] uppercase tracking-[0.16em] text-forest">
                {item.title}
              </h3>
              <p className="mt-1.5 text-xs leading-relaxed text-espresso/60">
                {item.copy}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-6 text-[0.625rem] leading-relaxed text-espresso/40">
          Sample measurements for this prototype. Confirm final specifications
          with production before publishing.
        </p>
      </div>
    </Dialog>
  );
}
