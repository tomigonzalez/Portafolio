import { useState, useEffect } from "react";

interface GithubStats {
  repoCount: number;
  commitCount: number;
  loading: boolean;
  error: string | null;
}

const useGithubStats = (username: string): GithubStats => {
  const [repoCount, setRepoCount] = useState<number>(0);
  const [commitCount, setCommitCount] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!username) return;
    setLoading(true);
    setError(null);

    const fetchStats = async () => {
      try {
        const reposRes = await fetch(
          `https://api.github.com/users/${username}/repos`
        );
        if (!reposRes.ok) throw new Error("Error fetching repos");
        const reposData = await reposRes.json();
        setRepoCount(reposData.length);

        const commitsRes = await fetch(
          `https://api.github.com/search/commits?q=author:${username}`,
          {
            headers: { Accept: "application/vnd.github.cloak-preview+json" },
          }
        );
        if (!commitsRes.ok) throw new Error("Error fetching commits");
        const commitsData = await commitsRes.json();

        setCommitCount(commitsData.total_count);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, [username]);

  return { repoCount, commitCount, loading, error };
};

export default useGithubStats;
