import { Card, CardContent } from "@material-ui/core";
import CachedIcon from "@material-ui/icons/Cached";
import CustomerTable from "./CustomerTable";

const CustomerDetails = () => {
  return (
    <Card className="m-[2rem] mt-0 p-[1rem] border-b-4 border-[#4191ff]">
      <CardContent className="border-b flex justify-between items-center">
        <h2 className="font-bold text-lg">ALL CUSTOMERS DETAIL</h2>
        <button className="bg-[#4191ff] w-3rem h-3rem flex justify-center items-center p-[.5rem] rounded-full">
          <CachedIcon className="text-white" />
        </button>
      </CardContent>
      <CardContent>
        <CustomerTable />
      </CardContent>
    </Card>
  );
};

export default CustomerDetails;
