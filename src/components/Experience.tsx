import { Briefcase, Calendar, MapPin } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      title: 'DevOps Engineer',
      company: 'KPMG',
      location: 'Remote, USA',
      period: '03/2024 - Present',
      responsibilities: [
        'Collaborated with architects and analysts to gather business requirements for the Cloud Modernization of Financial Analytics Platform and designed a secure AWS infrastructure using EC2, S3, IAM, and CloudFormation with 100% infrastructure documentation in Confluence.',
        'Partnered with development teams to containerize applications using Docker and deployed them via Amazon EKS using Helm charts, improving deployment flexibility by 40% and ensuring consistent release tracking with GitLab, Bitbucket, and detailed YAML-based deployment docs.',
        'Integrated AI/LLM-based anomaly detection for logs using Python scripts and OpenAI API, enabling 50% faster root cause analysis and generating automated daily summaries of system health to Slack using bots.',
        'Built CI/CD pipelines using GitLab CI, Jenkins, and ArgoCD, working with QA and release teams to automate build and deployment processes, increasing release velocity by 60% while maintaining clear documentation of workflows and environment-specific configurations.',
        'Implemented observability using AWS CloudWatch, Prometheus, and Grafana by collaborating with SREs to set up dashboards and alerts and used Bash scripts to automate log rotation and uptime checks, reducing incident detection time by 45%.',
        'Wrote Python and Shell scripts for automated tasks such as system cleanup, scheduled backups, and security patching and optimized RDS and DynamoDB using AWS CLI and CloudWatch.',
        'Integrated SonarQube and Checkmarx for SAST and DAST into CI/CD workflows and worked with InfoSec to apply DevSecOps standards while documenting security checkpoints, scan results, and audit trails in version-controlled Confluence pages.'
      ]
    },
    {
      title: 'DevOps Engineer',
      company: 'Tata Consultancy Services Ltd',
      location: 'Hyderabad, India',
      period: '04/2020 - 09/2022',
      responsibilities: [
        'Developed Ansible-based automation for configuration management, reducing manual provisioning efforts by 70%. Spearheaded the development of Ansible Automation tools, reducing manual tasks and optimizing workflows.',
        'Designed a Jenkins-based CI/CD pipeline integrated with Docker and Kubernetes, reducing build failures by 40%. Facilitated agile operations by orchestrating seamless collaboration among development, testing, deployment, and project teams.',
        'Automated resource provisioning with Terraform, ensuring consistent infrastructure deployments across AWS and Azure. Architected, developed, and maintained Python scripts for GIT administration and executed the complete continuous delivery cycle with Jenkins.',
        'Optimized logging and monitoring with ELK Stack, improving real-time incident response times by 50%. Managed Nginx web servers, optimizing performance and ensuring seamless delivery of applications.',
        'Managed network security groups, ingress/egress rules, and cross-VPC connectivity for multi-tier applications; implemented load balancing using HAProxy and AWS ALB.'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Professional Experience</h2>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 pb-12 border-l-2 border-blue-200 last:pb-0">
              <div className="absolute left-0 top-0 w-4 h-4 bg-blue-600 rounded-full -translate-x-[9px]"></div>

              <div className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between flex-wrap gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{exp.title}</h3>
                    <div className="flex items-center gap-2 text-blue-600 font-semibold mb-2">
                      <Briefcase size={18} />
                      <span>{exp.company}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-2 text-gray-600 mb-1">
                      <Calendar size={16} />
                      <span className="text-sm font-medium">{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <MapPin size={16} />
                      <span className="text-sm">{exp.location}</span>
                    </div>
                  </div>
                </div>

                <ul className="space-y-3">
                  {exp.responsibilities.map((resp, respIndex) => (
                    <li key={respIndex} className="flex gap-3 text-gray-700">
                      <span className="text-blue-600 mt-1.5">•</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}