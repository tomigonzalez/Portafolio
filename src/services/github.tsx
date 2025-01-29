import { useState, useEffect } from "react";

interface Repo {
  id: number;
  name: string;
}

interface GithubData {
  repos: Repo[];
  loading: boolean;
  error: string | null;
}

const useGithubData = (username: string): GithubData => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!username) return;
    setLoading(true);
    setError(null);

    const fetchRepos = async () => {
      try {
        const reposRes = await fetch(
          `https://api.github.com/users/${username}/repos`
        );
        if (!reposRes.ok) throw new Error("Error fetching repos");
        const reposData: Repo[] = await reposRes.json();
        setRepos(reposData);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, [username]);

  return { repos, loading, error };
};

export default useGithubData;
