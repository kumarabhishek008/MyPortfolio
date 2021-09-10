import { useSelector } from "react-redux";
import config from "../config";
import { GoPrimitiveDot } from 'react-icons/go';
import { skeleton } from "../helpers/utils";

const Education = () => {
    const loading = useSelector(state => state.loading);

    const renderSkeleton = () => {
        let array = [];
        for (let index = 0; index < 2; index++) {
            array.push((
                <li key={index}>
                    <span>
                        {skeleton({ width: 'w-2', height: 'h-2', className: "mr-2" })}
                        <div className="w-full">
                            <div className="block justify-between">
                                <div>
                                    {skeleton({ width: 'w-9/12', height: 'h-4', className: "mb-2" })}
                                </div>
                                <div>
                                    {skeleton({ width: 'w-6/12', height: 'h-4', className: "mb-2" })}
                                </div>
                            </div>
                            <div>
                                {skeleton({ width: 'w-6/12', height: 'h-3' })}
                            </div>
                        </div>
                    </span>
                </li>
            ))
        }

        return array;
    }

    return (
        <>
            {
                (typeof config.education !== 'undefined' && config.education.length !== 0) && (
                    <div className="card shadow-lg compact bg-base-100">
                        <div className="card-body">
                            <ul className="menu row-span-3 bg-base-100 text-base-content">
                                <li>
                                    <div className="pb-0-important mx-5">
                                        <h5 className="card-title">
                                            {
                                                loading ? skeleton({width: 'w-32', height: 'h-8'}) : (
                                                    <span className="opacity-70">Education</span>
                                                )
                                            }
                                        </h5>
                                    </div>
                                </li>
                                {
                                    loading ? renderSkeleton() : (
                                        config.education.map((item, index) => (
                                            <li key={index}>
                                                <span>
                                                    <GoPrimitiveDot className="mr-2 opacity-40"/>
                                                    <div>
                                                        <div className="block justify-between">
                                                            <div className="font-medium opacity-70">
                                                                {item.institution}
                                                            </div>
                                                            <div className="opacity-50">
                                                                {item.from} - {item.to}
                                                            </div>
                                                        </div>
                                                        <div className="opacity-70">
                                                            {item.degree}
                                                        </div>
                                                    </div>
                                                </span>
                                            </li>
                                        ))
                                    )
                                }
                            </ul>
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default Education;