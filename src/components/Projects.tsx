import { useEffect, useState } from 'react';
import { ExternalLink, Github, FolderGit2 } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  github_url?: string;
  live_url?: string;
  image_url?: string;
}

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load static projects instead of Supabase
    loadProjects();
  }, []);

  const loadProjects = () => {
    const staticProjects: Project[] = [
      {
        id: 1,
        title: "Portfolio Website",
        description: "A modern React + Tailwind portfolio deployed with Vercel.",
        technologies: ["React", "TypeScript", "Tailwind", "Vercel"],
        github_url: "https://github.com/NRavuri/nikhilportfolio",
        live_url: "https://your-site-url.com",
        image_url: "https://via.placeholder.com/600x400",
      },
      {
        id: 2,
        title: "DevOps Microservices Project",
        description: "Dockerized microservices deployed locally using Kubernetes.",
        technologies: ["Docker", "Kubernetes", "Node.js"],
        github_url: "https://github.com/NRavuri/devops-project",
        image_url: "https://via.placeholder.com/600x400",
      },
      {
        id: 3,
        title: "AI Resume Assistant",
        description: "AI-powered assistant using OpenRouter for resume improvements.",
        technologies: ["React", "OpenRouter", "Flask"],
        github_url: "https://github.com/NRavuri/ai-resume",
        image_url: "https://via.placeholder.com/600x400",
      }
    ];

    setProjects(staticProjects);
    setLoading(false);
  };

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
          Projects
        </h2>

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>
        ) : projects.length === 0 ? (
          <div className="max-w-2xl mx-auto text-center py-20">
            <div className="bg-gray-50 rounded-lg p-12 border-2 border-dashed border-gray-300">
              <FolderGit2 className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 classN
