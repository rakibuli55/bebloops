import DashboardContent from "@/components/ProfilePage/DashboardContent";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import TabsSidebar from "../components/ProfilePage/TabsSidebar";
import ProfileContent from "@/components/ProfilePage/ProfileContent";
import DonationHistoryContent from "@/components/ProfilePage/DonationHistoryContent";
import LanguageContent from "@/components/ProfilePage/LanguageContent";
import SettingsComponent from "@/components/ProfilePage/SettingsComponent";
import TermsConditionContent from "@/components/ProfilePage/TermsConditionContent";
import PrivacyPolicyContent from "@/components/ProfilePage/PrivacyPolicyContent";

const ProfilePage = () => {
  return (
    <section>
      <div className="mt-6">
        <Tabs
          defaultValue="dashboard"
          className="w-full flex items-start !bg-transparent"
        >
          <TabsSidebar />
          <div className="w-[70%] pl-6">
            <div className="bg-white py-[30px] px-[22px] rounded-[8px]">
              <TabsContent value="dashboard" className="mt-0 dash-tab-content no-scrollbar">
                <DashboardContent />
              </TabsContent>
              <TabsContent value="profile" className="mt-0 dash-tab-content no-scrollbar">
                <ProfileContent />
              </TabsContent>
              <TabsContent value="donation-history" className="mt-0 dash-tab-content no-scrollbar">
                <DonationHistoryContent />
              </TabsContent>
              <TabsContent value="language" className="mt-0 dash-tab-content no-scrollbar">
                <LanguageContent />
              </TabsContent>
              <TabsContent value="settings" className="mt-0 dash-tab-content no-scrollbar">
                <SettingsComponent />
              </TabsContent>
              <TabsContent value="terms-conditions" className="mt-0 dash-tab-content no-scrollbar">
                <TermsConditionContent />
              </TabsContent>
              <TabsContent value="privacy-policy" className="mt-0 dash-tab-content no-scrollbar">
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
