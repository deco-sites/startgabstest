import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import Icon from "../components/ui/Icon";

interface Props {
  href?: string;
  image?: ImageWidget;
  alt?: string;
  width?: number;
  height?: number;
  text?: string;
}

function Header({
  image =
  "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/4959/d7aa9290-074f-417c-99c3-5b0587c8c2ee",
  href = "https://deco.cx/",
  text = "Made with",
  alt = "Made with deco.cx",
  height = 20,
  width = 50,
}: Props) {
  return (
    <div class="flex flex-row justify-between w-full bg-black">
      <button onClick={() => { }}>
        <Icon id="Bars3" size={16} />
      </button>
      <a
        href={href}
        class="flex flex-row gap-1 items-center justify-center text-xs"
        target="_blank"
      >
        {text && <p>{text}</p>}
        {image && (
          <Image
            src={image || ""}
            alt={alt || ""}
            height={height || 20}
            width={width || 50}
          />
        )}
      </a>
      <div class="flex flex-row gap-1 items-center justify-center text-xs">
        <button onClick={() => { }}>
          <Icon id="User" size={16} />
        </button>
        <button onClick={() => { }}>
          <Icon id="Deco" size={16} />
        </button>
        <button onClick={() => { }}>
          <Icon id="ShoppingCart" size={16} />
        </button>
      </div>
    </div>
  );
}

export default Header;
