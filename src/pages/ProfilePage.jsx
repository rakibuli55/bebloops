import DashboardContent from "@/components/ProfilePage/DashboardContent";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import TabsSidebar from "../components/ProfilePage/TabsSidebar";
import ProfileContent from "@/components/ProfilePage/ProfileContent";
import DonationHistoryContent from "@/components/ProfilePage/DonationHistoryContent";
import LanguageContent from "@/components/ProfilePage/LanguageContent";
import SettingsContent from "@/components/ProfilePage/SettingsContent";
import TermsConditionContent from "@/components/ProfilePage/TermsConditionContent";
import PrivacyPolicyContent from "@/components/ProfilePage/PrivacyPolicyContent";

const ProfilePage = () => {
  return (
    <section>
      <div className="mt-6 custom-2xl:mt-4 custom-xl:mt-4 custom-lg:mt-2 custom-xs:mt-2">
        <Tabs
          defaultValue="dashboard"
          className="w-full flex items-start !bg-transparent max-md:flex-col"
        >
          <TabsSidebar />
          <div className="w-[70%] pl-6 custom-2xl:pl-4 custom-xl:pl-4 custom-lg:pl-4 max-md:pl-0 max-md:mt-5 max-md:w-full custom-xs:!mt-4">
            <div className="bg-white py-[30px] pl-[22px] pr-[11px] rounded-[8px] custom-xl:p-4 custom-xl:pr-2 custom-lg:p-4 custom-lg:pr-2 max-md:mb-5 max-md:p-4 max-md:pr-2">
              <TabsContent value="dashboard" className="mt-0 dash-tab-content pr-[11px] custom-xl:pr-2 max-md:pr-2">
                <DashboardContent />
              </TabsContent>
              <TabsContent value="profile" className="mt-0 dash-tab-content pr-[11px] custom-xl:pr-2 max-md:pr-2">
                <ProfileContent />
              </TabsContent>
              <TabsContent value="donation-history" className="mt-0 dash-tab-content pr-[11px] custom-xl:pr-2 max-md:pr-2">
                <DonationHistoryContent />
              </TabsContent>
              <TabsContent value="language" className="mt-0 dash-tab-content pr-[11px] custom-xl:pr-2 max-md:pr-2">
                <LanguageContent />
              </TabsContent>
              <TabsContent value="settings" className="mt-0 dash-tab-content pr-[11px] custom-xl:pr-2 max-md:pr-2">
                <SettingsContent />
              </TabsContent>
              <TabsContent value="terms-conditions" className="mt-0 dash-tab-content pr-[11px] custom-xl:pr-2 max-md:pr-2">
                <TermsConditionContent />
              </TabsContent>
              <TabsContent value="privacy-policy" className="mt-0 dash-tab-content pr-[11px] custom-xl:pr-2 max-md:pr-2">
                <PrivacyPolicyContent />
              </TabsContent>
            </div>
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default ProfilePage;
