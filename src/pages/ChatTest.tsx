import { SupportChat } from "@/components/SupportChat";

const ChatTest = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      <div className="max-w-2xl w-full">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            AI Support Chat Test
          </h1>
          <p className="text-muted-foreground">
            Click the chat button in the bottom-right corner to test the AI support chatbot.
          </p>
          <p className="text-sm text-muted-foreground mt-4">
            The chatbot uses Lovable AI and is trained on FocusZing product information.
          </p>
        </div>

        <div className="bg-card p-6 rounded-xl border border-border">
          <h2 className="text-xl font-semibold text-foreground mb-4">Test Suggestions:</h2>
          <ul className="space-y-2 text-muted-foreground">
            <li>• Ask about how FocusZing works</li>
            <li>• Inquire about pricing and availability</li>
            <li>• Request information about shipping</li>
            <li>• Ask technical questions about the device</li>
            <li>• Test the AI's knowledge about taVNS technology</li>
          </ul>
        </div>
      </div>

      <SupportChat />
    </div>
  );
};

export default ChatTest;
