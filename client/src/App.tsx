import Button from "./components/ui/Button";
import PlusIcon from "./icons/PlusIcon";
import ShareIcon from "./icons/ShareIcon";

const App = () => {
  return (
    <>
      <Button
        startIcon={<PlusIcon size="lg" />}
        size="lg"
        variant="primary"
        text="share"
      />
      <Button
        startIcon={<ShareIcon size="lg" />}
        size="lg"
        variant="secondary"
        text="add content"
      />

      <Button
        startIcon={<PlusIcon size="md" />}
        size="md"
        variant="primary"
        text="share"
      />
      <Button
        startIcon={<ShareIcon size="md" />}
        size="md"
        variant="secondary"
        text="add content"
      />

      <Button
        startIcon={<PlusIcon size="sm" />}
        size="sm"
        variant="primary"
        text="share"
      />
      <Button
        startIcon={<ShareIcon size="sm" />}
        size="sm"
        variant="secondary"
        text="add content"
      />
    </>
  );
};

export default App;
