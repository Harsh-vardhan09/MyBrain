import Button from "./components/ui/Button";
import Card from "./components/ui/Card";
import PlusIcon from "./icons/PlusIcon";
import ShareIcon from "./icons/ShareIcon";

const App = () => {
  return (
    <div className="p-4">
      <div className="flex gap-4 justify-end">
        <Button
          variant="primary"
          text="Add Content"
          startIcon={<PlusIcon size="md" />}
        />
        <Button
          variant="secondary"
          text="Share Brain"
          startIcon={<ShareIcon size="md" />}
        />
      </div>

      <div className="flex gap-4">
        <Card
          link="https://x.com/therahul4402/status/2040454094712942878"
          type="twitter"
          title="first tweet"
        />

        <Card
          link="https://www.youtube.com/watch?v=JeInwySxuxA"
          type="youtube"
          title="sideman"
        />
      </div>
    </div>
  );
};

// 1hr 44 min

export default App;
