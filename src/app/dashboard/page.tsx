"use client"

import TravelStep from "@/components/travel-step/travel-step";
import GetRewardButton from "@/components/travel-step/get-reward-button";
import DataInput from "@/components/data-gathering/data-input";

export default function Dashboard() { 
    return(
        <div>
            <h3 className="mt-10 mb-10">Your Trip</h3>


                <ol className="relative border-s border-gray-200 dark:border-gray-700">                  
                    <TravelStep date="15.11.2023" location="Alun-alun Kota Malang" description="Popular square in the heart of downtown featuring shade trees, walking paths & a central fountain." activities={[]} labels={["Picknick", "Relax", "Sports"]}/>
                    <GetRewardButton />
                    <TravelStep date="16.11.2023" location="Malang Night Paradise" description="After-dark amusement park featuring colorful light installations, dinosaur replicas & a boat ride." activities={[]} labels={["Relax", "Sightseeing", "Games"]}/>
                    <TravelStep date="17.11.2023" location="Pos Ketan Legenda" description="Authentic Sticky RIce Culinary of Malang." activities={[]} labels={["Relax", "Swimming"]}/>
                    <TravelStep date="18.11.2023" location="Museum Brawijaya" description="Artifacts & exhibits on Indonesia's war of independence, including military weapons & tanks." activities={[]} labels={["Social", "Relax"]}/>
                </ol>



                <div className="mt-36"></div>
        </div>
    )
}