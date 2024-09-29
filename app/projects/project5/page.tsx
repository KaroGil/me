import InteractiveMap from '@/app/components/interactiveMap';
import Card from '@/app/components/card';

export default function Project5() {
    return (
       <Card title='Interactive map'>
            <div>
                <p className="text-sm"><i>Works on computer.</i></p>
            </div>
            <p> Click a country to select it, click again to unselect.</p>


            <InteractiveMap />       
        </Card>
    );
}