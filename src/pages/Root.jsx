import { Outlet, useNavigation } from 'react-router-dom';

import MainNavigation from '../components/MainNavigation';
import Card from '../components/Card';
import PostPreviewList from '../components/PostPreviewList';
import ProfilePreviewList from '../components/ProfilePreviewList';
function Root() {
  // const navigation = useNavigation();

  return (
    <>
      <MainNavigation />
      <main>
         <Card/>
         <PostPreviewList/>
         <ProfilePreviewList/>
        <Outlet />
      </main>
    </>
  );
}

export default Root;
