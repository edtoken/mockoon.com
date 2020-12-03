import { FunctionComponent } from 'react';
import Hero from '../components/hero';
import Meta from '../components/meta';
import Layout from '../layout/layout';

const Contact: FunctionComponent = function () {
  return (
    <Layout>
      <Meta
        title='Request support'
        description='Found an issue? Wondering how to use Mockoon for your specific use case? Contact us!'
      />

      <Hero title='Questions? We are here to help!' />

      <div className='section'>
        <div className='container'>
          <div className='columns'>
            <div className='column is-3 is-offset-2'>
              <div className='content'>
                <p>
                  <i className='icon-chat has-text-light is-size-3'></i>
                </p>
                <div className='title is-4'>Community chat</div>
                <p>
                  Ask for help and discuss ideas and improvements on our
                  community chat. Usually, users get a response in under 48
                  hours.
                </p>
                <a
                  href='https://github.com/mockoon/mockoon/discussions'
                  target='_blank'
                  rel='noopener'
                >
                  Visit the community
                </a>
              </div>
            </div>
            <div className='column is-3'>
              <div className='content'>
                <p>
                  <i className='icon-email has-text-light is-size-3'></i>
                </p>
                <div className='title is-4'>Email us</div>
                <p>
                  You can also request direct help by emailing the maintainers team. We will do our best to assist you.
                </p>
                <a href='mailto:support@mockoon.com'>support@mockoon.com</a>
              </div>
            </div>
            <div className='column is-3'>
              <div className='content'>
                <p>
                  <i className='icon-star has-text-warning is-size-3'></i>
                </p>
                <div className='title is-4'>VIP support</div>
                <p>
                  Sponsor us and get an official maintainer to join your team on
                  the platform of your choice (Slack, Zoom, etc.) to answer
                  support requests or any questions you may have about the
                  project.
                </p>
                <a
                  href='https://github.com/sponsors/255kb'
                  rel='noopener'
                  target='_blank'
                >
                  Get VIP support
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
