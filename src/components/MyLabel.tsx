import "./mylabel.css";

export interface Props {
  /**
   * Esta es el nombre de la etiqueta
   */
  label: string;
  /**
   * La medida de la etiqueta
   */
  size: "normal" | "h1" | "h2" | "h3";
  /**
   * Todo capitalizado
   */
  allCaps?: boolean;
  /**
   * Colores del boton
   */
  color?: "primary" | "secondary" | "tertiary";
  /**
   * Color personalizado de la fuente
   */
  fontColor?: string;
}

export const MyLabel = ({
  allCaps = false,
  color = "primary",
  fontColor,
  label = "No Label",
  size = "normal",
}: Props) => {
  return (
    <span
      className={`label ${size} text-${color}`}
      style={{ color: fontColor }}
    >
      {allCaps ? label.toUpperCase() : label}
    </span>
  );
};
