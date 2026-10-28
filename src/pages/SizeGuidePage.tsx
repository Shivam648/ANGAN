import { Link } from "react-router-dom";
import { ArrowRight, Ruler } from "lucide-react";
import { PageHeader } from "../components/layout/PageHeader";
import { Notice } from "../components/ui/Notice";
import { measurementGuide, sizeRows } from "../data/sizing";
import { Seo } from "../lib/seo";

export function SizeGuidePage() {
  return (
    <>
      <Seo
        title="Size Guide — Aangan"
        description="Sample garment measurements and fit guidance for Aangan knitwear."
        canonical="/size-guide"
      />

      <PageHeader
        eyebrow="Fit & sizing"
        title="Size guide"
        crumb="Size guide"
        intro={
          <p>
            Measurements are garment measurements in centimetres. Our knits are
            designed with a little room for layering. If you are between sizes,
            choose the larger size for a relaxed line.
          </p>
        }
      />

      <div className="container-narrow py-12 sm:py-16">
        <Notice title="Sample measurements" className="mb-10">
          <p>
            This is a sample size chart for the prototype. Confirm final
            specifications with production before publishing a real size guide.
          </p>
        </Notice>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[480px] border-collapse text-left text-sm">
            <caption className="sr-only">
              Sample garment measurements in centimetres
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

        <div className="mt-12">
          <div className="flex items-center gap-3">
            <Ruler size={18} strokeWidth={1.1} aria-hidden="true" className="text-gold" />
            <h2 className="display-sm">How to measure</h2>
          </div>
          <div className="mt-6 grid gap-6 sm:grid-cols-3">
            {measurementGuide.map((item) => (
              <div key={item.title} className="border-t border-line pt-4">
                <h3 className="text-[0.625rem] uppercase tracking-[0.16em] text-forest">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-espresso/65">
                  {item.copy}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 border-t border-line pt-8">
          <h2 className="display-sm">A note on fit</h2>
          <div className="mt-5 space-y-4 text-[0.9375rem] leading-relaxed text-espresso/70">
            <p>
              Our knitwear is designed with ease. A relaxed fit leaves room for a
              shirt or a fine turtleneck underneath; a closer fit sits neatly
              under a jacket. Each product page includes a fit note and a model
              reference.
            </p>
            <p>
              Hand-knitted pieces can vary slightly in dimension. If you are
              unsure, write to the studio with your measurements and we will help
              you choose.
            </p>
          </div>
          <div className="mt-6 flex flex-wrap gap-6">
            <Link to="/shop" className="link-line">
              Shop the collection
              <ArrowRight size={13} strokeWidth={1.2} aria-hidden="true" />
            </Link>
            <Link to="/contact" className="link-line text-espresso/60">
              Ask about sizing
              <ArrowRight size={13} strokeWidth={1.2} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
