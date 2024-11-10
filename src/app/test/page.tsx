import HomeButton from "@/app/test/home-button";
import BackButton from "@/app/[id]/back-button";

export default function Test(){
    return (
        <div className='flex flex-col gap-1'>
            <div>뒤로가기 테스트</div>
            <div>최초 화면으로 돌아가야함.</div>
            <HomeButton/>
            <BackButton/>
        </div>)
}