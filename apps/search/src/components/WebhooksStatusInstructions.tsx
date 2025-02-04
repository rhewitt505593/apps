import { Text } from "@saleor/macaw-ui/next";
import { useWebhooksStatus } from "../lib/useWebhooksStatus";

export const WebhooksStatusInstructions = () => {
  const { data: webhooksData } = useWebhooksStatus();

  if (webhooksData && webhooksData.some((w) => !w.isActive)) {
    return (
      <>
        <Text as={"p"} marginBottom={4}>
          Check status of registered webhooks.
        </Text>
        <Text as={"p"} color={"iconCriticalDefault"}>
          Your webhooks were disabled. Most likely, your configuration is invalid. Please check your
          credentials
        </Text>
      </>
    );
  }

  return <Text>Check status of registered webhooks.</Text>;
};
