import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
export default function MyApp() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "check-in" });
      cal("floatingButton", {
        calLink: "ian-mworia/check-in",
        config: { layout: "month_view" },
      });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);
}
