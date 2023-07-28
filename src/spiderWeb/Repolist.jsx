import React, {useState} from "react";

const Repolist = ({inputValue}) => {
    let [repositorys, setRepositorys] = useState([]);
    let [initialInpuValue, setInitialInpuValue] = useState("");

    const RepoBoxes = () => {
        return repositorys.map((repo) =>{           
                return(
                    <div className="repoDiv" key={repo}>
                        <a href={`https://github.com/${inputValue}/${repo}`}>{repo}</a>
                    </div>
                )
            }
        )
    }

    if (inputValue !== "" && initialInpuValue !== inputValue) {
        fetch(`https://api.github.com/users/${inputValue.toLowerCase()}/repos`)
            .then(response => {
                setInitialInpuValue(inputValue)
                console.log("oh")
                return response.json()
            })
            .then(reposList => reposList.map(repo => repo.name))
            .then(names => setRepositorys(names))
            .catch((err) => setRepositorys([]));
    }
    if (inputValue !== "" && repositorys.length > 0) {
        return(
            <>
            <p>Public repositorys of: <a href={`https://github.com/${inputValue}`}>{inputValue}</a></p>
            <RepoBoxes />
            </>
        );
    }else if (inputValue !== "") {
        return(
            <>
            <p>Public repositorys of: "{inputValue}" was not found</p>
            </>
        );
    }
    
};


export default Repolist;