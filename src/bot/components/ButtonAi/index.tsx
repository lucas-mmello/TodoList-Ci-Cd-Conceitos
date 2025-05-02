type ButtonAiProps = {
  onClick: () => void;
};
export default function ButtonAi({ onClick }: ButtonAiProps) {
  return (
    <button
      title="Abrir assistente"
      className="assistente-flutuante"
      onClick={onClick}
    >
      🤖
    </button>
  );
}
