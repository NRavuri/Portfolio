export default function Skills() {
  const skillCategories = [
    {
      category: 'Programming & Scripting',
      skills: ['Python', 'Bash/Shell Scripting', 'Java', 'Ruby', 'PL/SQL'],
      color: 'blue'
    },
    {
      category: 'Cloud Platforms',
      skills: ['AWS (EC2, S3, IAM, EKS, RDS, Lambda, CloudFormation)', 'Azure (AKS, Blob Storage, Virtual Machines, DevOps)', 'GCP (GKE, BigQuery, Cloud Functions)'],
      color: 'green'
    },
    {
      category: 'CI/CD & DevOps Tools',
      skills: ['Jenkins', 'GitLab CI/CD', 'ArgoCD', 'Azure Pipelines', 'CircleCI', 'Spinnaker'],
      color: 'orange'
    },
    {
      category: 'Containerization & Orchestration',
      skills: ['Docker', 'Kubernetes', 'OpenShift', 'Docker Swarm', 'Helm'],
      color: 'cyan'
    },
    {
      category: 'Infrastructure as Code (IaC)',
      skills: ['Terraform', 'AWS CloudFormation', 'Pulumi', 'Ansible', 'Chef', 'Puppet'],
      color: 'teal'
    },
    {
      category: 'Monitoring & Observability',
      skills: ['Prometheus', 'Grafana', 'ELK Stack', 'Datadog', 'Splunk', 'AWS CloudWatch'],
      color: 'red'
    },
    {
      category: 'AI/LLM Tools',
      skills: ['OpenAI API', 'Datadog Watchdog AI', 'Google Cloud AIOps', 'Logz.io AI-based log analysis', 'Python-based LLM scripts'],
      color: 'violet'
    },
    {
      category: 'Security & Compliance',
      skills: ['HashiCorp Vault', 'AWS IAM Policies', 'RBAC', 'DevSecOps', 'SAST', 'DAST'],
      color: 'pink'
    },
    {
      category: 'Networking & Load Balancing',
      skills: ['Nginx', 'Apache', 'HAProxy', 'AWS ALB/ELB', 'Istio (Service Mesh)'],
      color: 'amber'
    },
    {
      category: 'Databases & Storage',
      skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'Amazon RDS', 'Redshift', 'CosmosDB'],
      color: 'emerald'
    }
  ];

  const colorClasses: Record<string, { bg: string; text: string; border: string }> = {
    blue: { bg: 'bg-blue-50', text: 'text-blue-700', border: 'border-blue-200' },
    green: { bg: 'bg-green-50', text: 'text-green-700', border: 'border-green-200' },
    orange: { bg: 'bg-orange-50', text: 'text-orange-700', border: 'border-orange-200' },
    cyan: { bg: 'bg-cyan-50', text: 'text-cyan-700', border: 'border-cyan-200' },
    teal: { bg: 'bg-teal-50', text: 'text-teal-700', border: 'border-teal-200' },
    red: { bg: 'bg-red-50', text: 'text-red-700', border: 'border-red-200' },
    violet: { bg: 'bg-violet-50', text: 'text-violet-700', border: 'border-violet-200' },
    pink: { bg: 'bg-pink-50', text: 'text-pink-700', border: 'border-pink-200' },
    amber: { bg: 'bg-amber-50', text: 'text-amber-700', border: 'border-amber-200' },
    emerald: { bg: 'bg-emerald-50', text: 'text-emerald-700', border: 'border-emerald-200' }
  };

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Technical Skills</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => {
            const colors = colorClasses[category.color];
            return (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{category.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className={`px-3 py-1 ${colors.bg} ${colors.text} rounded-full text-sm font-medium border ${colors.border}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}