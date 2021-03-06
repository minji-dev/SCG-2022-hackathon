import { Props } from "types/types";
import useApi from "hooks/useApi";
import { Game, Field, FieldAndFile } from "types/api";
import Link from "next/link";
import Image from "next/image";

function CatContentButton({ width, height, id, className }: Props) {
  const fieldsAndFiles = useApi<FieldAndFile[]>("/");
  console.log(fieldsAndFiles?.at(Number(id) - 1)?.file_id.location);
  return (
      <div className={className}>
        <Link href={`/categories/${id}`}>
          <div>
            <h1 className="border-b-[3px] border-[#333d79] text-2xl">
              {fieldsAndFiles?.at(Number(id) - 1)?.field_id.name}
            </h1>
            <div className={`w-100% h-${height} overflow-hidden m-auto border-0`}>
              <Image
                src={
                  fieldsAndFiles?.at(Number(id) - 1)?.file_id.location
                    ? `${fieldsAndFiles?.at(Number(id) - 1)?.file_id.location}`
                    : "/loading.png"
                }
                alt={`${fieldsAndFiles?.at(Number(id) - 1)?.file_id.name}`}
                width={width}
                height={height}
                className={`w-${width} h-auto object-cover`}
              />
            </div>
          </div>
        </Link>
      </div>
  );
}
export default CatContentButton;
