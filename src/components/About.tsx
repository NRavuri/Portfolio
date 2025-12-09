import { Code2, Cloud, Container, Shield } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">About Me</h2>

        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-gray-700 leading-relaxed mb-12">
            Experienced DevOps Engineer with 4+ years of expertise in automating and streamlining CI/CD pipelines,
            cloud infrastructure, and container orchestration. Proficient in AWS, Azure, Terraform, Kubernetes, Docker,
            Jenkins, and GitLab CI/CD, with a strong background in Infrastructure as Code (IaC), observability, security,
            and performance optimization. Recently explored AI/LLM-driven solutions for log intelligence, anomaly detection,
            and automated alert correlation to improve system resilience. Adept at collaborating with cross-functional teams
            to enhance system reliability, scalability, and deployment automation while ensuring DevSecOps best practices.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <Cloud className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Cloud Platforms</h3>
              <p className="text-sm text-gray-600">AWS, Azure, GCP</p>
            </div>

            <div className="text-center p-6 bg-green-50 rounded-lg">
              <Container className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Orchestration</h3>
              <p className="text-sm text-gray-600">Kubernetes, Docker</p>
            </div>

            <div className="text-center p-6 bg-orange-50 rounded-lg">
              <Code2 className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">CI/CD</h3>
              <p className="text-sm text-gray-600">Jenkins, GitLab, ArgoCD</p>
            </div>

            <div className="text-center p-6 bg-red-50 rounded-lg">
              <Shield className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Security</h3>
              <p className="text-sm text-gray-600">DevSecOps, IAM, Vault</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}