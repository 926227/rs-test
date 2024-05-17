interface Props {
  handleSetId: (cb: any) => void;
}

export const ButtonGroup = ({handleSetId}: Props) => {
  const handlePrevious = () => handleSetId((id: number) => (id > 1 ? id - 1 : id));
  const handleNext = () => handleSetId((id: number) => id + 1);

  return (
    <div className="button-group">
      <button
        name="previous"
        onClick={handlePrevious}
      >
        ←
      </button>
      <button
        name="next"
        onClick={handleNext}
      >
        →
      </button>
    </div>
  );
};
