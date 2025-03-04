import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-football-primary text-white py-8 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-tech-secondary">Tech Journey</h3>
            <ul className="space-y-2">
              <li><Link href="/journey" className="hover:text-tech-secondary">My Story</Link></li>
              <li><Link href="/projects" className="hover:text-tech-secondary">Projects</Link></li>
              <li><Link href="/skills" className="hover:text-tech-secondary">Skills</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-gospel-secondary">Football</h3>
            <ul className="space-y-2">
              <li><Link href="/matches" className="hover:text-gospel-secondary">Matches</Link></li>
              <li><Link href="/teams" className="hover:text-gospel-secondary">Teams</Link></li>
              <li><Link href="/highlights" className="hover:text-gospel-secondary">Highlights</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-tech-secondary">Contact</h3>
            <ul className="space-y-2">
              <li><Link href="/contact" className="hover:text-tech-secondary">Get in Touch</Link></li>
              <li><Link href="/about" className="hover:text-tech-secondary">About Me</Link></li>
              <li><Link href="/social" className="hover:text-tech-secondary">Social Media</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="mb-2">&copy; {new Date().getFullYear()} Personal Journey. All rights reserved.</p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-4">
            <p className="text-sm bg-gray-800 px-3 py-1 rounded-full inline-block">Matric Number: 236598</p>
            <p className="text-sm bg-gray-800 px-3 py-1 rounded-full inline-block">Ayinla Oluwasemilogo.Isaac</p>
          </div>
        </div>
      </div>
    </footer>
  )
}