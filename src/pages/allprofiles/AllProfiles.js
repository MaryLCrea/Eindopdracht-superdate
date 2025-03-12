import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './AllProfiles.css';
import NavBar from "../../components/navbar/NavBar";
import FilterProfiles from "../../components/filterprofiles/FilterProfiles";

function AllProfiles() {
    const [allProfiles, setAllProfiles] = useState([]);
    const [error, toggleError] = useState(false);

    useEffect(() => {
        const controller = new AbortController();

        async function fetchData() {
            try {
                const response = await axios.get('https://randomuser.me/api/?results=204', {
                    signal: controller.signal,

                });
                setAllProfiles(response.data.results);

                toggleError(false);
            } catch (e) {
                if (axios.isCancel(e)) {
                } else {
                    console.error('Fout bij ophalen van profielen:', e);
                    toggleError(true);
                }
            }
        }

        fetchData();

        return function cleanup() {
            controller.abort();
        }

    }, []);

    return (
        <>
            <NavBar/>
            <section>
                <section className="outer-page-container">
                    <article className="inner-profiles-container">
                        <FilterProfiles data={allProfiles}/>
                    </article>
                </section>
            </section>
        </>
    );
}

export default AllProfiles;