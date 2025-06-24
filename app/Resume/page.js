import { Box, Chip, Grid, List, ListItem, ListItemIcon, ListSubheader, Stack, Typography } from "@mui/material";

import LabelImportantTwoToneIcon from '@mui/icons-material/LabelImportantTwoTone';

import styles from './page.module.css';

function ResumeListItem(props) {
    return (
        <ListItem>
            <ListItemIcon>
                <LabelImportantTwoToneIcon />
            </ListItemIcon>
            <Typography variant="body2">
                {props.children}
            </Typography>
        </ListItem>
    );
}

function Resume() {

    const skills = [
        {
            "section": "Application & Enterprise Architecture",
            "chips": [
                "Legacy System Modernization", 
                "Hybrid Cloud",
                "Enterprise Security Architecture",
                "Mainframe",
                "SAP Technology",
                "Microservices",
                "System Integration",
                "Data Warehousing",
                "Solution Design"
            ]
        },
        {
            "section": "Program Management",
            "chips": [
                "Agile Methodologies",
                "Scrum and Kanban", 
                "Project Roadmapping",
                "Stakeholder Management",
                "Risk Assessment",
                "Resource Allocation",
                "Cross-Functional Collaboration",
                "Process Optimization"
            ]
        },
        {
            "section": "Full-Stack Development",
            "chips": [
                "Python and Flask",
                "JavaScript including React.js, Node.js, Express.js",
                "REST APIs",
                "SQL & NoSQL Databases (e.g. MongoDB)",
                "Java"
            ]
        },
        {
            "section": "Mainframe Development",
            "chips": [
                "z/OS",
                "JCL",
                "PL/I",
                "REXX",
                "Db2",
                "Mainframe DevOps",
                "Mainframe Debugging",
                "Mainframe Integration"
            ]
        },
        {
            "section": "Personnel Management",
            "chips": [
                "Team Leadership",
                "Mentoring & Coaching",
                "Performance Management",
                "Skills Development",
                "Conflict Resolution",
                "Workforce Planning",
                "Career Development",
                "Change Management",
                "Employee Engagement",
                "Technical Training"
            ]
        }
    ];

    return (
        <Box className={styles.resumeBox}>
            <Typography variant="h1" component="h1">Resume</Typography>
            <List subheader={ <li /> }>
                <li key='section-overview'>
                    <ListSubheader component="h2" classes={{root:styles.subhead, sticky:styles.stickyHead}}>Overview</ListSubheader>
                    <List>
                        <Typography variant="body1" className={styles.resumeItem}>
                            Experienced <strong>Technical Leader</strong> with 15+ years across <strong>enterprise architecture,
                            application development, and team management</strong>. Skilled in various <strong>cloud platforms,
                            mainframe, Java, cloud-native microservices (JavaScript, React, Java), Python, and SAP ERP</strong>. Recognized for 
                            <strong>innovative solutions, system modernization, and leadership</strong>. 
                            Proven ability to <strong>align IT strategy with business goals</strong>, optimize processes, and drive 
                            <strong>successful outcomes</strong> in complex environments.
                        </Typography>
                    </List>
                </li>
                
                <li key='section-skills'>
                    <ListSubheader component="h2" classes={{root:styles.subhead, sticky:styles.stickyHead}}>Areas of Expertise</ListSubheader>
                    
                        { skills.map( (sk, sk_ix) => (
                            <Stack className={styles.resumeItem} key={'skills-' + sk_ix} sx={{mt: 3}}>
                                <Typography className={styles.resumeHeadline} variant="h5">{sk.section}</Typography>
                                <Box>
                                    { sk.chips.map( (ch, ch_ix) => (
                                        <Chip size="small" variant="outlined" 
                                            label={ch} 
                                            key={sk_ix + "." + ch_ix} 
                                            sx={{margin: "5px"}}
                                        />
                                    )
                                    )}
                                </Box>
                            </Stack>
                        )
                        )}
                </li>

                <li key='section-work'>
                    <ListSubheader component="h2" classes={{root:styles.subhead, sticky:styles.stickyHead}}>Work Experience</ListSubheader>
                    <Grid container className={styles.resumeItem} columnSpacing={4} rowSpacing={0} columns="12">
                        <Grid size={3} className={styles.resumeHeadline}>
                            <Typography variant="h5">July 2024 &mdash; March 2025</Typography>
                        </Grid>
                        <Grid size={9} className={styles.resumeHeadline}>
                            <Typography variant="h5"><strong>Technical Solution Architect</strong>, IBM Corp.</Typography>
                        </Grid>
                        <Grid size={12}>
                            <List>
                                <ResumeListItem>
                                    Spearheaded the migration of legacy financial applications across the enterprise to SAP technology, 
                                    streamlining operations and improving system efficiency.
                                </ResumeListItem>
                                <ResumeListItem>
                                    Designed and implemented an SAP Cloud-based data archival solution using HANA and data lake technology, 
                                    enabling the decommissioning of multiple legacy applications while ensuring compliance with regulatory and 
                                    data retention requirements.
                                </ResumeListItem>
                                <ResumeListItem>
                                    Led cross-functional collaboration between SAP and IBM Cognos teams to enhance corporate business 
                                    intelligence and analytics, improving reporting accuracy and decision-making.
                                </ResumeListItem>
                                <ResumeListItem>
                                    Represented IBM CIO at the Z Design Council, influencing the future direction of mainframe technology.
                                </ResumeListItem>
                                <ResumeListItem>
                                    Delivered a comprehensive roadmap for application sunset and replacement strategies, securing full executive 
                                    approval and successfully executing several decommissioning initiatives.
                                </ResumeListItem>
                            </List>
                        </Grid>

                        <Grid size={3} className={styles.resumeHeadline}>
                            <Typography variant="h5">April 2021 &mdash; July 2024</Typography>
                        </Grid>
                        <Grid size={9} className={styles.resumeHeadline}>
                            <Typography variant="h5"><strong>First-Line Manager</strong>, IBM Corp.</Typography>
                        </Grid>
                        <Grid size={12}>
                            <List>
                                <ResumeListItem>
                                    Led three application squads through IBM's divestiture, ensuring a seamless transition to Kyndryl 
                                    Holdings, Inc., with no operational disruptions; recognized with an award from IBM's Vice President 
                                    for leadership and execution.
                                </ResumeListItem>
                                <ResumeListItem>
                                    Spearheaded the complete rewrite of a critical client-server Java application to IBM Cloud technology 
                                    using Java micro-services, MongoDB, and React.js front-end, optimizing performance and scalability while 
                                    meeting all release deadlines.
                                </ResumeListItem>
                                <ResumeListItem>
                                    Negotiated a streamlined architecture for a key financial reporting system, cutting costs by 30% while 
                                    maintaining all security, compliance, and performance benchmarks.
                                </ResumeListItem>
                                <ResumeListItem>
                                    Modernized mainframe application development by implementing GitHub Enterprise and automated CI/CD pipelines, 
                                    improving deployment efficiency and earning the team a Quarterly Growth Award for execution and knowledge 
                                    sharing.
                                </ResumeListItem>
                                <ResumeListItem>
                                    Rescued a stalled MVP project, delivering the first release in just six months after 18 months of delays, 
                                    securing stakeholder buy-in and funding for full product deployment within the year.
                                </ResumeListItem>
                            </List>
                        </Grid>

                        <Grid size={3} className={styles.resumeHeadline}>
                            <Typography variant="h5">January 2006 &mdash; April 2021</Typography>
                        </Grid>
                        <Grid size={9} className={styles.resumeHeadline}>
                            <Typography variant="h5"><strong>Application Architect</strong>, IBM Corp.</Typography>
                        </Grid>
                        <Grid size={12}>
                            <List>
                                <ResumeListItem>
                                    Led the architectural design for major data warehousing projects, including the successful deployment of the 
                                    Stevie-Award-winning Balance Sheet Segmentation initiative for IBM Accounting, ensuring seamless deployment 
                                    through an innovative &ldquo;bolt-on&rdquo; solution; recognized with a Special Equity Award and Performance 
                                    Champion Award.
                                </ResumeListItem>
                                <ResumeListItem>
                                    Orchestrated the migration of financial applications from legacy data centers to cloud-based infrastructure, 
                                    delivering the project on schedule and earning recognition and a cash award for leadership and execution.
                                </ResumeListItem>
                                <ResumeListItem>
                                    Advised cross-functional teams in transitioning mainframe systems to hybrid-cloud hosting, securing a 
                                    Manager&rsquo;s Choice Cash Award and a CIO Team Award Medal for contributions.
                                </ResumeListItem>
                                <ResumeListItem>
                                    Designed and deployed encryption solutions for internal network communications, achieving 100% compliance with 
                                    corporate security policies; authored standardized &ldquo;how-to&rdquo; manuals adopted across multiple teams, 
                                    earning the Eminence and Excellence Award.
                                </ResumeListItem>
                                <ResumeListItem>
                                    Led the development of a chatbot powered by IBM Watson AI, improving end-user support and reducing manual 
                                    inquiry resolution time.
                                </ResumeListItem>
                            </List>
                        </Grid>

                        <Grid size={3} className={styles.resumeHeadline}>
                            <Typography variant="h5">July 1997 &mdash; January 2006</Typography>
                        </Grid>
                        <Grid size={9} className={styles.resumeHeadline}>
                            <Typography variant="h5"><strong>Application Developer</strong>, IBM Corp.</Typography>
                        </Grid>
                        <Grid size={12}>
                            <List>
                                <ResumeListItem>
                                    Progressed from Junior Programmer to Database Administrator to Development Lead within IBM&rsquo;s 
                                    mainframe data warehousing team, demonstrating strong technical expertise and leadership growth.
                                </ResumeListItem>
                                <ResumeListItem>
                                    Developed and optimized mainframe data warehouse applications, improving data processing efficiency 
                                    and reporting accuracy.
                                </ResumeListItem>
                                <ResumeListItem>
                                    Led database administration efforts, enhancing system performance and ensuring data integrity across 
                                    enterprise financial systems.
                                </ResumeListItem>
                                <ResumeListItem>
                                    Managed development initiatives, mentoring junior team members and driving successful project deliveries.
                                </ResumeListItem>
                            </List>
                        </Grid>
                    </Grid>
                </li>

                <li key='section-education'>
                    <ListSubheader component="h2" classes={{root:styles.subhead, sticky:styles.stickyHead}}>Education</ListSubheader>
                    <Grid container className={styles.resumeItem} columnSpacing={4} rowSpacing={0} columns="12">
                        <Grid size={3} className={styles.resumeHeadline}>
                            <Typography variant="h5">2005 &mdash; 2007</Typography>
                        </Grid>
                        <Grid size={9} className={styles.resumeHeadline}>
                            <Typography variant="h5"><strong>Rensselaer at Work</strong>, Hartford, CT, USA</Typography>
                        </Grid>
                        <Grid size={12}>
                            <List>
                                <ResumeListItem>
                                    Master's of Science in Computer Science
                                </ResumeListItem>
                            </List>
                        </Grid>
                        
                        <Grid size={3} className={styles.resumeHeadline}>
                            <Typography variant="h5">1993 &mdash; 1997</Typography>
                        </Grid>
                        <Grid size={9} className={styles.resumeHeadline}>
                            <Typography variant="h5"><strong>University of Connecticut</strong>, Storrs, CT, USA</Typography>
                        </Grid>
                        <Grid size={12}>
                            <List>
                                <ResumeListItem>
                                    Bachelor's of Science in Computer Science & Engineering
                                </ResumeListItem>
                            </List>
                        </Grid>
                    </Grid>
                </li>
            </List>
        </Box>
    );
}

export default Resume;