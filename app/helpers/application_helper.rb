module ApplicationHelper

  #helper_method :default_button


  def default_button value, link, classes

    raw "<a class='default__button #{classes}' onmouseover='buttonHoverPosition(event,this,'default__button__hover')' data-type='page-transition' href='#{link}'>
          #{value}
          <span class='default__button__hover'></span>
          <span class='default__button__text'>#{value}</span>
        </a>

    "
  end

end
