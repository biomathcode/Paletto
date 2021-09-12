import ForgeUI, {
  useState,
  render,
  Fragment,
  Macro,
  Text,
  Button,
  Image,
  ButtonSet,
} from "@forge/ui";
import { savePattern,getPattern } from "./storage";

import Color from "./color";

const SVGIMAGE = ({palette}) => {

  const bannerRadius = 4;
  const borderStrokeWidth = 1;

  const svg = 
  `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1+${palette[0]}" x="0px" y="0px" xml:space="preserve" width="500px" height="110px">
        <rect x="15" y="7" width="80" height="80" rx="${bannerRadius}" stroke-width="${borderStrokeWidth}" fill="${palette[0]}" stroke="${palette[0]}" />
   <text font-style="normal" font-weight="normal" xml:space="preserve" text-anchor="start" font-family="sans-serif" font-size="15" stroke-width="0" id="svg_12" y="103.67484" x="24" stroke="#000" fill="#000000">${palette[0]}</text>

     <rect x="110" y="7" width="80" height="80" rx="${bannerRadius}" stroke-width="${borderStrokeWidth}" fill="${palette[1]}" stroke="${palette[1]}" />
     <text font-style="normal" font-weight="normal" xml:space="preserve" text-anchor="start" font-family="sans-serif" font-size="15" stroke-width="0" id="svg_12" y="103.67484" x="121" stroke="#000" fill="#000000">${palette[1]}</text>

     <rect x="205" y="7" width="80" height="80" rx="${bannerRadius}" stroke-width="${borderStrokeWidth}" fill="${palette[2]}" stroke="${palette[2]}" />
     <text font-style="normal" font-weight="normal" xml:space="preserve" text-anchor="start" font-family="sans-serif" font-size="15" stroke-width="0" id="svg_12" y="103.67484" x="217" stroke="#000" fill="#000000">${palette[2]}</text>

     <rect x="300" y="7" width="80" height="80" rx="${bannerRadius}" stroke-width="${borderStrokeWidth}" fill="${palette[3]}" stroke="${palette[3]}" />
     <text font-style="normal" font-weight="normal" xml:space="preserve" text-anchor="start" font-family="sans-serif" font-size="15" stroke-width="0" id="svg_12" y="103.67484" x="312" stroke="#000" fill="#000000">${palette[3]}</text>

     <rect x="395" y="7" width="80" height="80" rx="${bannerRadius}" stroke-width="${borderStrokeWidth}" fill="${palette[4]}" stroke="${palette[4]}" />
     <text font-style="normal" font-weight="normal" xml:space="preserve" text-anchor="start" font-family="sans-serif" font-size="15" stroke-width="0" id="svg_12" y="103.67484" x="408" stroke="#000" fill="#000000">${palette[4]}</text>

    </svg>`;
  return (
    <Image
      src={`data:image/svg+xml;utf8,${encodeURIComponent(svg)}`}
      alt={`color hex`}
    />
  );
};

const App = () => {
  const randomnumber = (min = 1, max = 1000) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  


  const [pattern, setPattern] = useState(async() => await getPattern("pattern"));

  const palette = Color[pattern]


  console.log(palette)

  const save = ()=> {
    savePattern("pattern", pattern)
  }


  const newPalette = () => {
    const patternNumber = randomnumber(1, 1000)
    setPattern(patternNumber);
  };

  return (
    <Fragment>
      {palette && <SVGIMAGE palette={palette} />
        }
      <Text>{palette}</Text>
      <ButtonSet>
      <Button text="random color" onClick={newPalette} />
      <Button text="save palette" onClick={save} />
      </ButtonSet>
    </Fragment>
  );
};

export const run = render(<Macro app={<App />} />);
