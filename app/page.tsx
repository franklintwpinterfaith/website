const navigation = [
  { label: "About", href: "#about" },
  { label: "Our Work", href: "#work" },
  { label: "Partners", href: "#partners" },
  { label: "Resources", href: "#resources" },
  { label: "News & Events", href: "#news" },
  { label: "Contact", href: "#contact" },
];

const missionPillars = [
  {
    title: "Welcome Difference",
    text: "Enhance acceptance of religious and cultural diversity across Franklin Township.",
  },
  {
    title: "Build Relationships",
    text: "Create activities that help members of different houses of worship socialize, learn, and serve together.",
  },
  {
    title: "Serve Shared Values",
    text: "Carry out community-based work rooted in values common among many faith traditions.",
  },
  {
    title: "Coordinate In Crisis",
    text: "Help houses of worship engage the community and coordinate during local or national emergencies.",
  },
];

const leadershipProfiles = [
  {
    name: "Rev. Sonya Redd",
    role: "President",
    image: "/leadership/rev-sonya-redd.jpg",
    bio: "Rev. Sonya Redd brings decades of ministry, youth advocacy, civic service, and community leadership. She helped build New Jersey's ACT-SO program, has served in NAACP leadership, and continues to champion young people discovering and developing their gifts.",
  },
  {
    name: "Rabbi Eli L. Garfinkel",
    role: "1st Vice President",
    image: "/leadership/rabbi-eli-garfinkel.png",
    bio: "Rabbi Eli L. Garfinkel was ordained by the Jewish Theological Seminary of America and has served Temple Beth El in Somerset since 2005. His work includes worship, adult education, cultural programming, writing, and interfaith relationship-building.",
  },
];

const councilLeaders = [
  "Pastor George Montanari, 2nd Vice President",
  "Maulana Syed Rizwan Rizvi, 3rd Vice President",
  "Phyllis Beal, Secretary",
  "Ardman Singh, Assistant Secretary",
];

const workAreas = [
  {
    title: "Clergy Council",
    text: "A platform for faith leaders to build trust, share a unified message, bridge gaps between communities, and support the public good.",
  },
  {
    title: "Youth Engagement",
    text: "A developing space for young people to grow through service, dialogue, leadership, and community connection.",
  },
  {
    title: "Interfaith Gatherings",
    text: "Programs, vigils, dialogues, and shared meals that help neighbors show up for one another across traditions.",
  },
  {
    title: "Community Response",
    text: "A coordinating role during moments of need, including resource-sharing, emergency communication, and compassionate public witness.",
  },
];

const partners = [
  {
    name: "Masjid-e-Ali",
    url: "https://masjid-e-ali.org",
    message:
      "Peace be with you. We are either brothers in faith or equal in humanity.",
  },
  {
    name: "Temple Beth El",
    url: "https://templebethelsomerset.org",
    message:
      "We join with all who desire a world built on the foundations of love, diversity, and acceptance.",
  },
  {
    name: "Ananda Mandir Hindu Temple & Community Center",
    url: "https://www.anandamandir.org",
    message:
      "Let us unite to celebrate spirituality, encourage community service, and build an inclusive future for the generations to come.",
  },
];

const resourceGroups = [
  {
    title: "Start Here",
    links: [
      {
        label: "NJ 211",
        href: "https://nj211.org/",
        text: "24/7 help finding food, housing, health, disaster, and other support services.",
      },
      {
        label: "Somerset County Human Services",
        href: "https://www.somersetcountynj.gov/government/human-services",
        text: "County programs and contacts for residents who need support.",
      },
      {
        label: "Somerset County Resources & Publications",
        href: "https://www.somersetcountynj.gov/government/human-services/operations-planning/resources-publications",
        text: "County resource guides, mental health materials, and community support documents.",
      },
    ],
  },
  {
    title: "Food & Basic Needs",
    links: [
      {
        label: "Franklin Food Bank",
        href: "https://franklinfoodbank.org/",
        text: "Local food assistance, volunteer opportunities, and ways to give help.",
      },
      {
        label: "NJ SNAP",
        href: "https://www.nj.gov/humanservices/njsnap/",
        text: "Food assistance information from the New Jersey Department of Human Services.",
      },
      {
        label: "Somerset County Social Services",
        href: "https://www.somersetcountynj.gov/government/affiliated-agencies/social-services",
        text: "County assistance programs including SNAP, Medicaid, emergency assistance, and related services.",
      },
    ],
  },
  {
    title: "Health, Youth & Families",
    links: [
      {
        label: "GetCoveredNJ",
        href: "https://www.nj.gov/getcoverednj/home/",
        text: "New Jersey's official health insurance marketplace.",
      },
      {
        label: "Pioneer Family Success Center",
        href: "https://www.pioneerfsc.com/resourcesinfo",
        text: "Family support, housing, utility, and community resources.",
      },
      {
        label: "Youth Services Directory",
        href: "/resources/youth-services-directory-2017.pdf",
        text: "Archived youth services directory from the previous FTIC resource library.",
      },
    ],
  },
];

const archives = [
  {
    title: "Sri Lankan bombing vigil",
    date: "April 22, 2019",
    href: "/news/sri-lankan-bombing-vigil-2019.pdf",
    text: "Community members assembled at Masjid-e-Ali in remembrance and solidarity.",
  },
  {
    title: "New Zealand mosque attack vigil",
    date: "March 19, 2019",
    href: "/news/new-zealand-mosque-vigil-2019.pdf",
    text: "Neighbors gathered at Temple Beth El to honor victims and reject hate.",
  },
  {
    title: "Tree of Life Synagogue vigil",
    date: "October 2018",
    href: "/news/tree-of-life-vigil-2018.pdf",
    text: "Franklin Township residents and faith leaders gathered in support of the Jewish community.",
  },
];

const contactActions = [
  {
    title: "Join or Volunteer",
    text: "Tell the council how you or your house of worship would like to participate.",
    href: "mailto:info@franklintwpinterfaith.org?subject=Volunteer%20with%20FTIC",
  },
  {
    title: "Become a Partner",
    text: "Share your organization name, website, clergy contact, and message of unity.",
    href: "mailto:info@franklintwpinterfaith.org?subject=Partner%20with%20FTIC",
  },
  {
    title: "Community Coordination",
    text: "Reach out about interfaith support, community resources, or urgent coordination needs.",
    href: "mailto:info@franklintwpinterfaith.org?subject=Community%20coordination%20request",
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header" aria-label="Site header">
        <a className="brand" href="#top" aria-label="Franklin Township Interfaith Council home">
          <img
            src="/ftic-logo-color-transparent.png"
            alt=""
            className="brand-mark"
          />
          <span>
            <strong>Franklin Township</strong>
            <span>Interfaith Council</span>
          </span>
        </a>
        <nav className="nav" aria-label="Primary navigation">
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-art" aria-hidden="true">
          <img src="/ftic-logo-color-transparent.png" alt="" />
        </div>
        <div className="hero-copy">
          <p className="eyebrow">Franklin Township, New Jersey</p>
          <h1>Many faiths. One community.</h1>
          <p className="hero-text">
            The Franklin Township Interfaith Council brings houses of worship,
            civic partners, and neighbors together to strengthen understanding,
            service, unity, and emergency response across our community.
          </p>
          <div className="hero-actions" aria-label="Primary actions">
            <a className="button primary" href="#contact">
              Get involved
            </a>
            <a className="button secondary" href="#resources">
              Find resources
            </a>
          </div>
          <dl className="quick-facts" aria-label="Council priorities">
            <div>
              <dt>4</dt>
              <dd>mission priorities</dd>
            </div>
            <div>
              <dt>2016</dt>
              <dd>Clergy Council established</dd>
            </div>
            <div>
              <dt>.org</dt>
              <dd>new home: franklintwpinterfaith.org</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="section mission-section" id="about">
        <div className="section-inner split">
          <div className="section-heading">
            <p className="eyebrow">Our Mission</p>
            <h2>Acceptance, relationship, service, and readiness.</h2>
          </div>
          <div className="mission-grid">
            {missionPillars.map((pillar) => (
              <article className="mission-card" key={pillar.title}>
                <h3>{pillar.title}</h3>
                <p>{pillar.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section about-section">
        <div className="section-inner two-column">
          <div>
            <p className="eyebrow">About FTIC</p>
            <h2>A council built for Franklin Township's shared life.</h2>
          </div>
          <div className="prose-block">
            <p>
              FTIC exists to help a richly diverse community know one another
              better and stand together in moments of joy, service, tension, and
              need. Its work creates clearer pathways for residents, houses of
              worship, and civic partners to connect around shared values.
            </p>
            <p>
              The council is shaped by clergy and lay leaders who bring
              experience in ministry, education, civic life, youth development,
              and community service.
            </p>
          </div>
        </div>
      </section>

      <section className="section leadership-section" aria-labelledby="leadership-heading">
        <div className="section-inner">
          <div className="section-heading compact">
            <p className="eyebrow">Leadership</p>
            <h2 id="leadership-heading">Community leaders carrying the work forward.</h2>
          </div>
          <div className="leadership-grid">
            {leadershipProfiles.map((profile) => (
              <article className="leader-card" key={profile.name}>
                <img src={profile.image} alt={profile.name} />
                <div>
                  <p>{profile.role}</p>
                  <h3>{profile.name}</h3>
                  <span>{profile.bio}</span>
                </div>
              </article>
            ))}
          </div>
          <div className="leader-list" aria-label="Additional council leaders">
            {councilLeaders.map((leader) => (
              <span key={leader}>{leader}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="section work-section" id="work">
        <div className="section-inner">
          <div className="section-heading compact">
            <p className="eyebrow">Our Work</p>
            <h2>Programs and public witness that bring people together.</h2>
          </div>
          <div className="work-grid">
            {workAreas.map((area) => (
              <article className="work-card" key={area.title}>
                <h3>{area.title}</h3>
                <p>{area.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section partners-section" id="partners">
        <div className="section-inner">
          <div className="section-heading compact">
            <p className="eyebrow">Partners</p>
            <h2>Houses of worship and community partners with a shared message.</h2>
          </div>
          <div className="partner-grid">
            {partners.map((partner) => (
              <article className="partner-card" key={partner.name}>
                <h3>{partner.name}</h3>
                <p>{partner.message}</p>
                <a href={partner.url} target="_blank" rel="noreferrer">
                  Visit partner site
                </a>
              </article>
            ))}
          </div>
          <div className="wide-cta">
            <div>
              <h3>Want your organization listed?</h3>
              <p>
                FTIC welcomes houses of worship and community organizations that
                want to build unity and serve Franklin Township together.
              </p>
            </div>
            <a
              className="button secondary on-dark"
              href="mailto:info@franklintwpinterfaith.org?subject=Partner%20with%20FTIC"
            >
              Become a partner
            </a>
          </div>
        </div>
      </section>

      <section className="section resources-section" id="resources">
        <div className="section-inner">
          <div className="section-heading compact">
            <p className="eyebrow">Community Resources</p>
            <h2>A cleaner starting point for help, referrals, and support.</h2>
          </div>
          <div className="resource-grid">
            {resourceGroups.map((group) => (
              <article className="resource-card" key={group.title}>
                <h3>{group.title}</h3>
                <ul>
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <a href={link.href} target={link.href.startsWith("http") ? "_blank" : undefined} rel={link.href.startsWith("http") ? "noreferrer" : undefined}>
                        {link.label}
                      </a>
                      <p>{link.text}</p>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section news-section" id="news">
        <div className="section-inner two-column">
          <div>
            <p className="eyebrow">News & Events</p>
            <h2>Gatherings, updates, and community moments.</h2>
            <p className="section-note">
              FTIC shares upcoming programs as they are scheduled. Past vigils
              and public statements remain part of the council's ongoing
              witness against hate and for solidarity.
            </p>
          </div>
          <div className="archive-list" aria-label="Past community stories">
            {archives.map((item) => (
              <article className="archive-card" key={item.href}>
                <p>{item.date}</p>
                <h3>{item.title}</h3>
                <span>{item.text}</span>
                <a href={item.href}>Read archived story</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section contact-section" id="contact">
        <div className="section-inner">
          <div className="section-heading compact">
            <p className="eyebrow">Contact</p>
            <h2>Reach the council, volunteer, or start a partnership.</h2>
            <p className="section-note">
              Connect with FTIC to join the work, share a community need, or
              begin a conversation between houses of worship.
            </p>
          </div>
          <div className="contact-grid">
            {contactActions.map((action) => (
              <article className="contact-card" key={action.title}>
                <h3>{action.title}</h3>
                <p>{action.text}</p>
                <a href={action.href}>Email FTIC</a>
              </article>
            ))}
          </div>
          <div className="contact-footer">
            <span>Public contact email</span>
            <a href="mailto:info@franklintwpinterfaith.org">
              info@franklintwpinterfaith.org
            </a>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div>
          <img src="/ftic-logo-color-transparent.png" alt="" />
          <span>Franklin Township Interfaith Council</span>
        </div>
        <p>franklintwpinterfaith.org</p>
      </footer>
    </main>
  );
}
