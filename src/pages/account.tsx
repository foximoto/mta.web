import LoginForm from "@/components/LoginForm";
import PageHeader from "@/components/PageHeader";
import { accountTabItems } from "@/constants/tabItem";
import Meta from "@/meta/meta";

const Account = () => {
  return (
    <div>
      <Meta title="About us" favicon="/favicon.ico" />
      <PageHeader description="" headingFirst="Your" headingSecond="Account" />
      <LoginForm />
      <div>
        <div role="tablist" className="tabs tabs-box">
          {accountTabItems.map((item) => (
            <a key={item} role="tab" className="tab">
              {item}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Account;
