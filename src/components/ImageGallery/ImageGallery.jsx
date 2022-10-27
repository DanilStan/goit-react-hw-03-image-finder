import { Component } from 'react';
import { Loader } from '../Loader/Loader';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { Button } from 'components/Button';
import { getImage } from 'data/api';
import PropTypes from 'prop-types';
import css from './ImageGallery.module.css';

const Status = {
  init: 'init',
  loading: 'loading',
  ok: 'success',
  error: 'error',
};

export class ImageGallery extends Component {
  state = {
    page: 1,
    images: [],
    status: Status.init,
  };

  async componentDidMount() {
    this.setState({ status: Status.loading });

    try {
      const data = await getImage(this.props.value);
      this.setState({ images: data, status: Status.ok });
    } catch {
      this.setState({ status: Status.error });
    }
  }

  async componentDidUpdate(prevProps, prevState) {
    if (prevProps.value !== this.props.value) {
      const newData = await getImage(this.props.value);
      this.setState({ images: newData });
    }

    if (
      prevState.page !== this.state.page &&
      prevProps.value === this.props.value
    ) {
      const newPage = await getImage(this.props.value, this.state.page);
      this.setState(prevState => ({
        images: [...prevState.images, ...newPage],
      }));
    }
  }

  handleLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    return (
      <>
        {this.state.status === Status.error && <p>Ошибка</p>}

        {(this.state.status === Status.loading ||
          this.state.status === Status.init) && <Loader />}

        {this.state.status === Status.ok && (
          <ul className={css.ImageGallery}>
            {this.state.images?.map(item => {
              return (
                <ImageGalleryItem
                  key={item.webformatURL}
                  url={item.webformatURL}
                  onClick={this.props.onClick}
                  bigImage={item.largeImageURL}
                />
              );
            })}
          </ul>
        )}
        {this.state.images.length >= 12 && (
          <Button onClick={this.handleLoadMore} />
        )}
      </>
    );
  }
}

ImageGallery.propTypes = {
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
